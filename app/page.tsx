import Image from "next/image";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen md:flex-row flex-col items-center justify-start -mb-12 py-28 pb-2 px-16 md:p-24 -my-20 font-mono -ml-4 md:ml-0">
      <div>
        <Image
          src="https://github.com/adlonymous/portfolio/assets/93305952/4e674cfb-2b04-43f0-afcf-b28f6ed74945"
          alt="Aadil"
          width={400}
          height={400}
          className="rounded-2xl transform rotate-3  border border-blue-400 "
        />
      </div>
      <div className="text-center mb-4 mt-12 md:ml-52 bg-slate-100 dark:bg-slate-900/90 p-2 rounded-xl py-4">
        <div>
          <h1 className="text-3xl md:text-5xl italic mb-2">
            Hey, I'm Aadil 👋
          </h1>
          <p className="text-lg md:text-xl mb-4">
            Software Developer, Entrepreneur <br />& Cricketer
          </p>
        </div>
        <Link href="https://twitter.com/adlonymous" className="mx-2">
          <XIcon />
        </Link>
        <Link href="https://github.com/adlonymous" className="mx-2">
          <GitHubIcon />
        </Link>
        <Link href="https://linkedin.com/in/aadilintech" className="mx-2">
          <LinkedInIcon />
        </Link>
        <Separator className="mt-6" />
        <div className="mt-6">
          <p>Welcome to my personal website!</p>
        </div>
      </div>
    </main>
  );
}

// ![aadilblr](https://github.com/adlonymous/portfolio/assets/93305952/4e674cfb-2b04-43f0-afcf-b28f6ed74945)
//![aadilams](https://github.com/adlonymous/portfolio/assets/93305952/dacb808a-03ae-4049-bf33-73f1221532a1)
