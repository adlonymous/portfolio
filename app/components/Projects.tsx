"use client";
import React from "react";
import { projects } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="flex flex-col justify-center px-16 py-12 font-mono my-7">
      <h1 className="text-center text-4xl font-bold"> Stuff I've Made</h1>
      <div className="flex text-center justify-center py-8 ">
        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem className="md:basis-1/3">
                <Card className="dark:bg-slate-900">
                  <CardHeader>
                    <CardTitle>{project.projname}</CardTitle>
                    <CardDescription className="text-justify">
                      {project.projdesc}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Image
                      src={project.imagesrc}
                      width={400}
                      height={200}
                      className="rounded-xl"
                      alt="Project Image"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button>
                      <Link href={project.projlink}>Check it out</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
