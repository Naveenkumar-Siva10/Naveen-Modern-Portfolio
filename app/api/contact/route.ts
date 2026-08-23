import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    let body: any;
    try {
      body = await request.json();
    } catch {
      const text = await request.text();
      try {
        body = JSON.parse(text);
      } catch {
        return NextResponse.json(
          { success: false, error: "Invalid JSON format." },
          { status: 400 }
        );
      }
    }

    const { firstName, lastName, email, mobile, service, message, permission } = body || {};

    const fullName = `${firstName || ""} ${lastName || ""}`.trim();

    // 1. Validation
    if (!fullName || fullName.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide project details (minimum 10 characters)." },
        { status: 400 }
      );
    }

    if (permission === false) {
      return NextResponse.json(
        { success: false, error: "Permission consent is required to contact you." },
        { status: 400 }
      );
    }

    // 2. Structured inquiry payload for email delivery
    const inquiryPayload = {
      recipient: "naveenwbdigital@gmail.com",
      replyTo: email.trim(),
      subject: `New Portfolio Enquiry: ${fullName} (${service || "General Inquiry"})`,
      data: {
        name: fullName,
        email: email.trim(),
        mobile: mobile ? String(mobile).trim() : "Not provided",
        service: service || "Not specified",
        message: message.trim(),
        submittedAt: new Date().toISOString(),
      },
    };

    // Log the enquiry payload for audit and delivery verification
    console.log("=== NEW CONTACT INQUIRY RECEIVED ===");
    console.log(`To: ${inquiryPayload.recipient}`);
    console.log(`Reply-To: ${inquiryPayload.replyTo}`);
    console.log(`From: ${inquiryPayload.data.name} <${inquiryPayload.data.email}>`);
    console.log(`Phone: ${inquiryPayload.data.mobile}`);
    console.log(`Service: ${inquiryPayload.data.service}`);
    console.log(`Message: ${inquiryPayload.data.message}`);
    console.log("====================================");

    // If an external email provider key is configured in env (e.g. RESEND_API_KEY), send via API
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["naveenwbdigital@gmail.com"],
            reply_to: email.trim(),
            subject: inquiryPayload.subject,
            html: `
              <h2>New Business Enquiry from Portfolio</h2>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Phone:</strong> ${mobile || "Not provided"}</p>
              <p><strong>Service Requested:</strong> ${service || "General"}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-line; background: #f4f4f5; padding: 12px; border-radius: 8px;">${message}</p>
              <hr />
              <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
            `,
          }),
        });
      } catch (emailErr) {
        console.error("External email dispatch error:", emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your inquiry has been received and I will respond to your email shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { success: false, error: "An error occurred while submitting your message. Please try again or email directly to naveenwbdigital@gmail.com." },
      { status: 500 }
    );
  }
}
