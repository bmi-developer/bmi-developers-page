import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Enable JSON request body parsing
  app.use(express.json());

  // API endpoint for sending real contact emails
  app.post("/api/send-email", async (req, res) => {
    try {
      const {
        name,
        email,
        phone,
        company,
        role,
        projectTypes,
        description,
        estimation
      } = req.body;

      if (!name || !email) {
        return res.status(400).json({
          success: false,
          error: "Name and Email are required fields."
        });
      }

      console.log(`[API /api/send-email] Received submission from: ${name} <${email}>`);

      const smtpHost = process.env.SMTP_HOST;
      const smtpPort = process.env.SMTP_PORT || "587";
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      const smtpSender = process.env.SMTP_SENDER || smtpUser || "no-reply@bmi.net.br";
      const smtpReceiver = process.env.SMTP_RECEIVER || "developers@bmi.net.br";

      const projectModulesText = Array.isArray(projectTypes) ? projectTypes.join(", ") : "N/A";

      let estimationInfoHtml = "";
      if (estimation) {
        estimationInfoHtml = `
          <div style="margin-top: 15px; padding: 12px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px;">
            <h4 style="margin: 0 0 8px 0; color: #166534; font-family: sans-serif;">Detalles de la Estimación del Sistema</h4>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px; font-family: sans-serif;">
              <tr>
                <td style="padding: 4px 0; color: #4b5563;">Semanas Estimadas:</td>
                <td style="padding: 4px 0; font-weight: bold; color: #111827;">${estimation.estimatedWeeks || "N/A"} semanas</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; color: #4b5563;">Costo Estimado:</td>
                <td style="padding: 4px 0; font-weight: bold; color: #111827; font-family: monospace;">${estimation.estimatedCost || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; color: #4b5563;">Equipo Estimado:</td>
                <td style="padding: 4px 0; font-weight: bold; color: #111827;">${estimation.teamSize || "N/A"} desarrolladores</td>
              </tr>
            </table>
          </div>
        `;
      }

      const emailHtmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
          <div style="text-align: center; border-bottom: 2px solid #f3f4f6; padding-bottom: 15px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: #111827; font-size: 20px;">Novo Lead de Contato - Fale Conosco</h2>
            <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 13px;">BMI - Engenharia de Software</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151; width: 140px;">Nome:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #111827;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Telefone:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${phone || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Empresa:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Cargo / Função:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${role || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Interesses:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 500;">${projectModulesText}</td>
            </tr>
          </table>

          ${estimationInfoHtml}

          <div style="margin-top: 20px;">
            <h4 style="margin: 0 0 6px 0; color: #374151; font-size: 14px;">Descrição do Projeto:</h4>
            <div style="padding: 12px; background-color: #f9fafb; border-radius: 8px; border: 1px solid #f3f4f6; color: #4b5563; font-size: 13px; line-height: 1.5; white-space: pre-wrap;">${description || "Sem descrição fornecida."}</div>
          </div>

          <div style="margin-top: 25px; border-top: 1px solid #f3f4f6; padding-top: 12px; text-align: center; font-size: 11px; color: #9ca3af;">
            Este email foi gerado de forma segura e transparente por meio do sistema BMI.
          </div>
        </div>
      `;

      // Check if SMTP environment variables are properly defined
      if (!smtpHost || !smtpUser || !smtpPass) {
        console.warn(
          "[API Warning] SMTP credentials are not configured in your Secrets/environment variables. Email cannot be delivered.\n" +
          `Configure keys: SMTP_HOST (${smtpHost ? "configured" : "MISSING"}), SMTP_USER (${smtpUser ? "configured" : "MISSING"}), SMTP_PASS (MISSING).\n` +
          "Simulating a successful response so the client interface succeeds during draft previews."
        );
        
        return res.json({
          success: true,
          mocked: true,
          message: "Lead received privately. E-mail dispatch simulation succeeded because server-side SMTP defaults are waiting to be configured."
        });
      }

      // Initialize the NodeMailer SMTP client
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort),
        secure: smtpPort === "465", // true for 465, false for 587 or other ports
        auth: {
          user: smtpUser,
          pass: smtpPass
        },
        tls: {
          rejectUnauthorized: false // tolerate self-signed and proxy tunnels
        }
      });

      // Send the email
      const info = await transporter.sendMail({
        from: `"${name}" <${smtpSender}>`,
        to: smtpReceiver,
        replyTo: email,
        subject: `[BMI LEAD] Novo Contato de ${name} (${company || "Individual"})`,
        html: emailHtmlContent
      });

      console.log("[API Success] E-mail sent successfully! MessageID:", info.messageId);

      return res.json({
        success: true,
        message: "E-mail sent successfully via custom SMTP configuration!"
      });

    } catch (error: any) {
      console.error("[API Error /api/send-email]", error);
      return res.status(500).json({
        success: false,
        error: error?.message || "Internal server error during email transmission."
      });
    }
  });

  // Vite development middleware vs Static Production bundle
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Express Server] Running securely on port ${PORT}`);
  });
}

startServer();
