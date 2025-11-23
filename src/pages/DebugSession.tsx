import React, { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function DebugSession() {
  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      console.log("SESSION RESULT:", data, error);
    };

    checkSession();
  }, []);

  return (
    <div className="p-4 text-white bg-black">
      Check the console (F12 → Console) for session results.
    </div>
  );
}
