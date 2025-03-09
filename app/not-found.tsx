"use client";
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Page non trouvée</h2>
        <p className="mb-4">
          Désolé, la page que vous recherchez n'existe pas.
        </p>
        <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
