import Link from "next/link";
import Backlight from "./(components)/Backlight";

export default function NotFound() {
  return (
    <Backlight
    className={`flex flex-col items-center justify-center h-full backdrop-blur-xl rounded-2xl bg-neutral-400/30 text-neutral-800`}
    >
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-lg">Sorry, we couldn't find this page.</p>
      <Link href="/" className="mt-4 text-amber-400 hover:underline">
        Go back home
      </Link>
    </Backlight>
  );
}
