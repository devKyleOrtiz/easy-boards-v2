import React from "react";
import Logo from "../../../assets/logo.svg?react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Navbar() {
  return (
    <div className="w-screen h-14 flex justify-center items-center">
      <div className="flex justify-center items-center ">
        <Logo />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-full h-full flex items-center justify-center p-5 ">
                  <Card className="h-[28rem] bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 text-white w-72 flex flex-col justify-end">
                    <CardHeader>
                      <CardTitle>EZ Boards</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        A project manager to help you organize and optimize your
                        workflow
                      </p>
                    </CardContent>
                  </Card>
                  <div className="flex flex-col space-y-3">
                    <Card className="border-none hover:bg-muted transition-colors cursor-pointer w-96">
                      <CardHeader>
                        <CardTitle className="font-normal">Feature 1</CardTitle>
                        <CardDescription>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Blanditiis eos pariatur rerum corrupti tenetur
                          assumenda suscipit
                        </CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="border-none hover:bg-muted transition-colors cursor-pointer w-96">
                      <CardHeader>
                        <CardTitle className="font-normal">Feature 2</CardTitle>
                        <CardDescription>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Blanditiis eos pariatur rerum corrupti tenetur
                          assumenda suscipit
                        </CardDescription>
                      </CardHeader>
                    </Card>
                    <Card className="border-none hover:bg-muted transition-colors cursor-pointer w-96">
                      <CardHeader>
                        <CardTitle className="font-normal">Feature 3</CardTitle>
                        <CardDescription>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Blanditiis eos pariatur rerum corrupti tenetur
                          assumenda suscipit
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div></div>
    </div>
  );
}
