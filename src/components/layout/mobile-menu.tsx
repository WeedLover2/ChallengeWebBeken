import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/app/data/navigation";

export function MobileMenu() {
    return (
        <Sheet>
        <SheetTrigger
            render={
            <Button
                variant="ghost"
                size="icon"
                className="fixed right-4 top-3 z-50 rounded-full bg-black/30 text-white backdrop-blur-md md:hidden"
                aria-label="Buka menu"
            />
            }
        >
            <Menu />
        </SheetTrigger>

        <SheetContent
            side="right"
            className="border-white/40 bg-white/50 text-neutral-900 backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_1px_0_0_rgba(255,255,255,0.7),0_8px_32px_rgba(0,0,0,0.15)]"
        >
            <SheetTitle className="sr-only">Menu navigasi</SheetTitle>
            <ul className="mt-12 flex flex-col gap-6 px-6 text-lg uppercase">
            {navLinks.map((link) => (
                <li key={link.href}>
                <SheetClose
                    nativeButton={false}
                    render={<a href={link.href} />}
                    className="group relative inline-block py-1 transition-all duration-300 hover:translate-x-1 active:translate-x-1 active:opacity-70"
                >
                    {link.label}
                    <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-neutral-900 transition-transform duration-300 group-hover:scale-x-100 group-active:scale-x-100" />
                </SheetClose>
                </li>
            ))}
            </ul>
        </SheetContent>
        </Sheet>
    );
}