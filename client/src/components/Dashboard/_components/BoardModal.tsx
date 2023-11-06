import { Button } from "@nextui-org/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import BoardBgCard from "./BoardBgCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface UnsplashImage {
  urls: {
    regular: string;
  };
}

interface UnsplashResponse {
  results: UnsplashImage[];
}

interface BoardModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BoardModal({ isOpen, onOpenChange }: BoardModalProps) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const query = "nature";
      const perPage = 9;
      const desiredWidth = 800; // Set the width you want for the images
      const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&per_page=${perPage}&client_id=${
        import.meta.env.VITE_UNSPLASH_ACCESS_KEY
      }`;

      try {
        const response = await axios.get<UnsplashResponse>(url);
        const imageUrls = response.data.results.map((image) => {
          // Modify the URL here to include the desired size
          return `${image.urls.regular}&w=${desiredWidth}`;
        });
        console.log(imageUrls);
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images from Unsplash:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <div
        onClick={() => onOpenChange(true)}
        className="flex items-center justify-center h-40 transition rounded-lg shadow-md cursor-pointer w-72 bg-black/30 hover:scale-110 drop-shadow-lg"
      >
        <p className="text-lg font-semibold text-white">Add a board</p>
      </div>

      <Modal size="lg" isOpen={isOpen} onClose={() => onOpenChange(false)}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              Create board
            </ModalHeader>
            <ModalBody>
              <section className="">
                <div className="grid grid-cols-3 gap-5 ">
                  {images.map((image) => (
                    <BoardBgCard key={image} imageUrl={image} />
                  ))}
                </div>
              </section>
            </ModalBody>
            <ModalFooter>
              <div className="flex flex-col items-center justify-center w-full space-y-3">
                <div className="flex flex-col items-start w-full">
                  <Label className="text-lg" htmlFor="board">
                    Board title
                  </Label>
                </div>

                <Input id="board" />
                <Button
                  className="w-full"
                  variant="light"
                  onPress={() => onOpenChange(false)}
                >
                  Create
                </Button>
              </div>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
