import { navLinks } from "@/app/data/navigation";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
    return (
        <header className="absolute inset-x-0 top-0 z-50 text-white">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-end px-6">
                <ul className="hidden gap-8 text-sm font-medium uppercase tracking-wide md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="transition-opacity hover:opacity-70">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <MobileMenu />
            </nav>
        </header>
        );
}