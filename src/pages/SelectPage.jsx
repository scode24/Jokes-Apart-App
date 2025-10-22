import { motion } from "motion/react";
import { useState } from "react";
import TechBox from "../componenets/TechBox";

const SelectPage = () => {
  const [selectedList, setSelectedList] = useState([]);
  const [techList, setTechList] = useState([
    { name: "React", isSelected: false, tag: "react" },
    { name: "Node.js", isSelected: false, tag: "nodejs" },
    { name: "Express.js", isSelected: false, tag: "expressjs" },
    { name: "MongoDB", isSelected: false, tag: "mongodb" },
    { name: "JavaScript", isSelected: false, tag: "javascript" },
    { name: "TypeScript", isSelected: false, tag: "typescript" },
    { name: "HTML", isSelected: false, tag: "html" },
    { name: "CSS", isSelected: false, tag: "css" },
    { name: "Tailwind CSS", isSelected: false, tag: "tailwindcss" },
    { name: "Microservices", isSelected: false, tag: "microservices" },
    { name: "Docker", isSelected: false, tag: "docker" },
    { name: "Kubernetes", isSelected: false, tag: "kubernetes" },
    { name: "GraphQL", isSelected: false, tag: "graphql" },
    { name: "REST API", isSelected: false, tag: "restapi" },
    { name: "Python", isSelected: false, tag: "python" },
    { name: "Java", isSelected: false, tag: "java" },
    { name: "Spring Boot", isSelected: false, tag: "springboot" },
    { name: "AWS", isSelected: false, tag: "aws" },
    { name: "CI/CD", isSelected: false, tag: "cicd" },
    { name: "Kafka", isSelected: false, tag: "kafka" },
  ]);

  const onClickHandle = (index, tag) => {
    let list = [...techList];
    let selectedTechList = [...selectedList];

    if (list[index].isSelected) {
      list[index].isSelected = false;
      selectedTechList = selectedTechList.filter((e) => e.tag !== tag);
    } else {
      if (selectedList.length === 5) return;
      list[index].isSelected = true;
      selectedTechList.push(list[index]);
    }

    setTechList(list);
    setSelectedList(selectedTechList);
  };

  return (
    <div className="flex flex-col gap-3 h-full">
      <span>Bugs are the only thing that ship on time. 🐛🚀</span>
      <div className="flex flex-row justify-between">
        <span className="flex flex-col justify-center text-xl py-3 md:text-3xl">
          Select 5 technologies you like most
        </span>

        {selectedList.length === 5 && (
          <div className="flex flex-row rounded-md border p-3 gap-3">
            <div className="flex flex-col justify-center">Continue</div>

            <motion.div
              className="flex flex-col justify-center"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="flex flex-col justify-center items-center rounded-full border w-[30px] h-[30px]">
                <span>→</span>
              </button>
            </motion.div>
          </div>
        )}
      </div>
      <span className="text-green-500">Selected {selectedList.length}/5</span>
      <div className="grid gap-3 mt-10 grid-cols-2 overflow-y-auto h-[90%] md:h-auto md:grid-cols-4 lg:grid-cols-7">
        {techList.map((tech, index) => {
          return (
            <TechBox
              key={index}
              index={index}
              name={tech.name}
              tag={tech.tag}
              isSelected={tech.isSelected}
              onclickfn={onClickHandle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectPage;
