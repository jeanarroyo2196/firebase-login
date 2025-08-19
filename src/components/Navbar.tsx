import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { CloseButton } from "../assets/icons/CloseButton";
import { ListButton } from "../assets/icons/ListButton";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

export const Navbar = () => {
  return (
    <Disclosure
      as="nav"
      className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 focus:outline-2 focus:outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <ListButton aria-hidden="true" />
              <CloseButton aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};
