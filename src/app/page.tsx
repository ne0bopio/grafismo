import { CapsuleNav } from "@/components/CapsuleNav";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/components/HomePage";
import { es } from "@/lib/i18n";

export default function Page() {
  return (
    <>
      <CapsuleNav lang="es" dict={es} />
      <HomePage lang="es" dict={es} />
      <Footer lang="es" dict={es} />
    </>
  );
}
