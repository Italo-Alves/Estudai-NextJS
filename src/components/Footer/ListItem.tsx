import React from 'react';
import Link from "next/link";

interface ListItemProps {
  href: string
  hasImage?: boolean
  text?: string
  children?: React.ReactNode
}

export function ListItem({ href, hasImage, text, children }: ListItemProps) {
  return (
    <li>
      <Link href={href}>
        <a>
          {
            hasImage ? children : text
          }
        </a>
      </Link>
    </li>
  )
}
