import { languages, frameworkstools } from "@/lib/data";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="flex flex-col justify-center px-16 py-12 font-mono my-7">
      <h1 className="text-center text-4xl font-bold">My Skill Set</h1>
      <div className="flex flex-col md:flex-row text-center justify-center py-8">
        <div className="md:p-6 p-2">
          <Card className="dark:bg-slate-900">
            <CardHeader>
              <CardTitle className="text-xl">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {languages.map((language) => (
                  <li className="text-l p-2">{language}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="md:p-6 p-2">
          <Card className="dark:bg-slate-900">
            <CardHeader>
              <CardTitle className="text-xl">Frameworks & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {frameworkstools.map((ft) => (
                  <li className="text-l p-2">{ft}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
