import React from "react";

export default function Header() {
  return (
    <section className="flex flex-col items-center justify-center h-[25rem]">
      <h1 className="px-1 text-4xl font-extrabold tracking-wider scroll-m-20 lg:text-5xl text-primary ">
        Easy Boards
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground max-w-xl text-center">
        Embrace clarity and momentum with EasyBoards – because when it comes to
        managing work, simplicity and functionality should go hand in hand.
      </p>
    </section>
  );
}
