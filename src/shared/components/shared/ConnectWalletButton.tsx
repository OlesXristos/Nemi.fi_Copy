import React from 'react';
import { ChevronDown, ChevronUp, Wallet } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
const otherWallets = [
  {
    id: '1',
    name: 'Obsidion',
    img: (
      <img
        className="w-10 h-10"
        src="https://pbs.twimg.com/profile_images/1849068253685116928/MzTzv03r_400x400.jpg"></img>
    ),
  },
  {
    id: '2',
    name: 'Obsidion',
    img: (
      <img
        className="w-10 h-10"
        src="https://pbs.twimg.com/profile_images/1849068253685116928/MzTzv03r_400x400.jpg"></img>
    ),
  },
];
export const ConnectWalletButton = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild className="">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden sm:flex px-2 py-1.5 rounded-md text-white text-sm font-medium justify-center  items-center gap-2 bg-blue-500 hover:bg-blue-600 cursor-pointer">
            <Wallet className="h-4 w-4" />
            <span>Connect wallet</span>
          </motion.div>
        </DialogTrigger>
        <DialogContent className="h-full flex flex-col w-full sm:h-fit sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Connect wallet</DialogTitle>
            <DialogDescription>Select your preferred wallet connection method</DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="newUser" className="">
            <TabsList className="grid w-full grid-cols-2 ">
              <TabsTrigger className="cursor-pointer " value="newUser">
                New User
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer " value="existingUser">
                Exsisting User
              </TabsTrigger>
            </TabsList>
            <TabsContent value="newUser">
              <Button className="w-full h-14 cursor-pointer bg-blue-600 text-white hover:bg-blue-700">
                Continue with Passkey
              </Button>
            </TabsContent>
            <TabsContent value="existingUser">
              <Button className="w-full h-14 cursor-pointer bg-blue-600 text-white hover:bg-blue-700">
                Login with Passkey
              </Button>
            </TabsContent>
          </Tabs>

          <div className="flex items-center w-full justify-center gap-5">
            <div className="border-b w-full"></div>
            <span className="">or</span>
            <div className="border-b  w-full"></div>
          </div>
          <DialogFooter>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-12.5 flex justify-between cursor-pointer">
                  <span>Connect with Other Wallets</span> <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-100">
                <div className="grid grid-cols-2 gap-3 mt-3 p-3 cursor-pointer">
                  {otherWallets.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col justify-center items-center border p-5 rounded-xl">
                      <span>{item.img}</span> <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="sm:hidden">
        <Drawer>
          <DrawerTrigger className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex px-2 py-2 rounded-md text-white text-sm font-medium justify-center  items-center gap-2 bg-blue-500 hover:bg-blue-600 cursor-pointer">
              <Wallet className="h-4 w-4" />
              <span>Connect wallet</span>
            </motion.div>
          </DrawerTrigger>
          <DrawerContent className="h-screen flex flex-col data-[vaul-drawer-direction=bottom]:max-h-[100vh] px-5">
            <DrawerHeader>
              <DrawerTitle className=" text-xl font-bold">Connect wallet</DrawerTitle>
              <DrawerDescription> Select your preferred wallet connection method</DrawerDescription>
            </DrawerHeader>
            <Tabs defaultValue="newUser" className="">
              <TabsList className="grid w-full grid-cols-2 ">
                <TabsTrigger className="cursor-pointer " value="newUser">
                  New User
                </TabsTrigger>
                <TabsTrigger className="cursor-pointer " value="existingUser">
                  Exsisting User
                </TabsTrigger>
              </TabsList>
              <TabsContent value="newUser">
                <Button className="w-full h-14 cursor-pointer bg-blue-600 text-white hover:bg-blue-700">
                  Continue with Passkey
                </Button>
              </TabsContent>
              <TabsContent value="existingUser">
                <Button className="w-full h-14 cursor-pointer bg-blue-600 text-white hover:bg-blue-700">
                  Login with Passkey
                </Button>
              </TabsContent>
            </Tabs>

            <div className="flex items-center w-full justify-center gap-5">
              <div className="border-b w-full"></div>
              <span className="">or</span>
              <div className="border-b  w-full"></div>
            </div>
            <DrawerFooter>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full h-12.5 flex justify-between cursor-pointer">
                    <span>Connect with Other Wallets</span> <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-100">
                  <div className="grid grid-cols-2 gap-3 mt-3 p-3 cursor-pointer">
                    {otherWallets.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col justify-center items-center border p-5 rounded-xl">
                        <span>{item.img}</span> <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};
