"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { SocialProofBadgeAvatarsData } from "../_data/social-proof-badge-avatars"

import { cn } from "@/lib/utils"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { AvatarStack } from "@/components/ui/avatar"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] mt-[-4rem] md:mt-[-6rem] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 scale-110 md:scale-105">
        <Image
          src="/img/gallery/hero-main.jpg"
          alt="Chef preparing delicious meal"
          fill
          priority
          className="object-cover object-top md:object-center brightness-[0.75] transition-transform duration-700"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 md:px-6 h-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4 max-w-2xl leading-snug drop-shadow-lg"
        >
          Taste the <span className="text-orange-500">Flavor</span> of Freshness
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-2xl mb-6 md:mb-8 max-w-xl text-gray-200"
        >
          Enjoy freshly prepared meals, crafted with love and delivered fast —
          right to your door.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex gap-x-2">
            <Link href="/menu" className={buttonVariants({ size: "lg" })}>
              Order Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialProofBadge() {
  return (
    <a
      href="https://github.com/Qualiora/shadboard"
      className={cn(
        buttonVariants({ variant: "outline", size: "sm" }),
        "group gap-x-1.5"
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <AvatarStack
        avatars={SocialProofBadgeAvatarsData}
        size="sm"
        className="me-1.5"
        avatarClassName="h-7 w-7"
      />
      Trusted by 1,000+ developers worldwide
      <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-in-out ltr:group-hover:translate-x-0.5 rtl:scale-x-[-1] rtl:group-hover:-translate-x-0.5" />
    </a>
  )
}

function HeroImage() {
  return (
    <Card className="bg-accent p-1 md:p-1">
      <Card
        className="pointer-events-none bg-muted p-6 overflow-hidden"
        asChild
      >
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/img/hero-main.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 640px, 1080px"
            priority
            className="object-cover object-center brightness-[0.8] dark:hidden"
          />
          <Image
            src="/images/misc/hero-dark.png"
            alt=""
            fill
            sizes="(max-width: 768px) 640px, 1080px"
            priority
            className="hidden object-cover object-top dark:block"
          />
        </AspectRatio>
      </Card>
    </Card>
  )
}

// SpiceHub – Fresh Taste. Fast Delivery.
// From our kitchen to your doorstep — authentic flavors made daily with love and care.
