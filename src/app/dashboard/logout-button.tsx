"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/config/supabase/client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <Button onClick={handleLogout}>
      <LogOut />
      Logout
    </Button>
  );
}
