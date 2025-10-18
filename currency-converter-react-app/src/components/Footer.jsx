export default function Footer() {
    return (
    <footer className="bg-gray-100 text-center py-4 border-t mt-10">
        <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} KIMX Services. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-1">
        Follow us on our Socials @KIMXServices for money tips and more!
        </p>
    </footer>
    );
}
