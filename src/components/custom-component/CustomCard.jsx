import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function CustomCard({ title, content, link }) {
  return (
    <Card className="mx-4 min-h-36 flex-col shadow-2xl flex-1">
      <a href={link}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl">{content}</CardContent>
      </a>
    </Card>
  );
}

export default CustomCard;
