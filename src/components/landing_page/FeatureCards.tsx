import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { features, mobFeatures } from "@/constants/features";

export function FeatureCards() {
  return (
    <div className="hidden md:grid grid-cols-3 mx-16 gap-12 py-12">
      {features.map((feature, index) => {
        return (
            <Card>
            <CardHeader>
              {feature.icon}
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export function MobFeatureCards() {
  return (
    <div className="md:hidden flex flex-col gap-2">
      {mobFeatures.map((feature, index) => {
        return (
          <Card className="flex flex-row">
            <CardHeader>
              {feature.icon}
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
