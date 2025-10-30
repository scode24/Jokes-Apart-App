import { motion } from "motion/react";
import { useEffect, useState } from "react";
import BackButton from "../componenets/BackButton";
import TechBox from "../componenets/TechBox";
import useApiCaller from "../hooks/ApiCaller";
import useUserStore from "../stores/UserStore";

const SelectPage = () => {
  const { user, userTechList, setUserTechList } = useUserStore();
  const { call } = useApiCaller();
  const [selectedList, setSelectedList] = useState("");
  const [techList] = useState([
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

  useEffect(() => {
    if (userTechList !== undefined) {
      setSelectedList(userTechList);
    }
  }, [userTechList]);

  const getSelectedCount = () => {
    if (!selectedList) return 0;
    return selectedList.split(",").length;
  };

  const onClickHandle = (indx, tag) => {
    const list = selectedList.split(",").filter(Boolean);
    const index = list.indexOf(tag);

    if (index === -1) {
      if (selectedList.split(",").length === 5) return;
      list.push(tag);
    } else {
      list.splice(index, 1);
    }
    setSelectedList(list.join(","));
  };

  const isTagInSelected = (tag) => {
    const list = selectedList.split(",").filter((i) => i == tag);
    return list.length > 0 ? true : false;
  };

  const addUserTechList = async () => {
    try {
      const response = await call(
        "/add-user-tech-list",
        "post",
        {
          username: user,
          list: selectedList,
        },
        "Adding user preference"
      );

      if (response.status === "list updated") {
        setUserTechList(selectedList);
        alert(
          "User preference is successfully added / updated. Now you can enjoy jokes."
        );
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="flex flex-col gap-3 h-full">
      <BackButton />
      {/* <span>Bugs are the only thing that ship on time. 🐛🚀</span> */}
      <div className="flex flex-row justify-between">
        <span className="flex flex-col justify-center text-xl py-3 md:text-3xl">
          Select 5 technologies you like most
        </span>

        {selectedList !== "" && selectedList.split(",").length === 5 && (
          <div
            className="flex flex-row rounded-md border p-3 gap-3 dark:border-zinc-800"
            onClick={() => addUserTechList()}
          >
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
      <span className="text-[#89AB00]">Selected {getSelectedCount()}/5</span>
      <div className="grid gap-3 mt-7 grid-cols-2 overflow-y-auto h-[90%] md:h-auto md:grid-cols-4 lg:grid-cols-7">
        {techList.map((tech, index) => {
          return (
            <TechBox
              key={index}
              index={index}
              name={tech.name}
              tag={tech.tag}
              isSelected={isTagInSelected(tech.tag)}
              onclickfn={onClickHandle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectPage;
