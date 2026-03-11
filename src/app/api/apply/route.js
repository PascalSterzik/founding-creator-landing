import { NextResponse } from 'next/server';

const SUPABASE_URL = 'https://brvebfxaexxjghvwyidy.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJydmViZnhhZXh4amdodnd5aWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNjc5MjcsImV4cCI6MjA4ODc0MzkyN30.PJmaphJ1QDjKTwihIjnGKQf5pTfPFGj2f5EGatzwbqs';

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate required fields
    const { vorname, nachname, email } = body;
    if (!vorname || !nachname || !email) {
      return NextResponse.json(
        { error: 'Vorname, Nachname und E-Mail sind Pflichtfelder.' },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    // Sanitize: only allow expected fields
    const applicationData = {
      vorname: String(body.vorname).trim().slice(0, 100),
      nachname: String(body.nachname).trim().slice(0, 100),
      email: String(body.email).trim().toLowerCase().slice(0, 200),
      instagram: body.instagram ? String(body.instagram).trim().slice(0, 100) : null,
      tiktok: body.tiktok ? String(body.tiktok).trim().slice(0, 100) : null,
      youtube: body.youtube ? String(body.youtube).trim().slice(0, 200) : null,
      hauptplattform: ['instagram', 'tiktok', 'youtube', 'andere'].includes(body.hauptplattform)
        ? body.hauptplattform
        : 'instagram',
      reichweite: ['micro', 'small', 'medium', 'large'].includes(body.reichweite)
        ? body.reichweite
        : 'micro',
      nische: body.nische ? String(body.nische).trim().slice(0, 200) : null,
      erfahrung: ['none', 'one-two', 'three-five', 'regular'].includes(body.erfahrung)
        ? body.erfahrung
        : 'none',
      herausforderung: body.herausforderung
        ? String(body.herausforderung).trim().slice(0, 2000)
        : null,
      status: 'Neu',
    };

    // Insert into Supabase
    const supabaseRes = await fetch(
      `${SUPABASE_URL}/rest/v1/creator_applications`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: 'return=representation',
        },
        body: JSON.stringify(applicationData),
      }
    );

    if (!supabaseRes.ok) {
      const errText = await supabaseRes.text();
      console.error('Supabase insert failed:', errText);
      return NextResponse.json(
        { error: 'Bewerbung konnte nicht gespeichert werden. Bitte versuche es erneut.' },
        { status: 500 }
      );
    }

    const inserted = await supabaseRes.json();

    return NextResponse.json({
      success: true,
      message: 'Bewerbung erfolgreich eingereicht!',
      id: inserted?.[0]?.id,
    });
  } catch (err) {
    console.error('Application submission error:', err);
    return NextResponse.json(
      { error: 'Ein unerwarteter Fehler ist aufgetreten.' },
      { status: 500 }
    );
  }
}
