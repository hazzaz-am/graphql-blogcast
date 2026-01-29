import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Socials() {
  return (
    <>
      <Link href="https://twitter.com/@hazzaz-am" target="_blank">
        <FaXTwitter />
      </Link>
      <Link href="https://github.com/hazzaz-am" target="_blank">
        <FaGithub />
      </Link>
    </>
  );
}