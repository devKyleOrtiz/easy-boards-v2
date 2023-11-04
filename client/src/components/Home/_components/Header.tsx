import React from "react";

export default function Header() {
  return (
    <section className="flex flex-col items-start justify-center h-[25rem] text-left max-w-2xl m-auto">
      <h1 className="px-1 text-4xl font-extrabold tracking-wider scroll-m-20 lg:text-5xl text-primary ">
        Easy Boards
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground max-w-xl">
        Embrace clarity and momentum with EasyBoards – because when it comes to
        managing work, simplicity and functionality should go hand in hand.
      </p>
    </section>
  );
}
