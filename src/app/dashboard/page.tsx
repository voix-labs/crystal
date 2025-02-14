import { createClient } from "@/config/supabase/server";
import { redirect } from "next/navigation";
import LogoutButton from "./logout-button";

export default async function HomePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");
  return (
    <div className="p-4 md:p-8 space-y-4 flex items-center justify-center flex-col h-screen w-screen">
      <div className="font-semibold text-2xl">Dashboard</div>
      <LogoutButton />
    </div>
  );
}
