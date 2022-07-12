import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import todoStore from "../../store/todoStore";
import { tabsInfo } from "../constants/tabsInfo";
import TabsContent from "./TabsContent/TabsContent";

const Tabs: FC = observer(() => {
  const statusAll = todoStore.statusAll;
  const statusCompleted = todoStore.statusCompleted;
  const statusDeleted = todoStore.statusDeleted;
  return (
    <div className="mt-20 w-[740px] m-auto lg:w-[600px] md:w-full">
      <div className="flex mb-2 text-lg text-red-500 md:justify-between">
        <div className="px-[96px] text-center lg:px-14 md:px-0">
          all:
          <span className="text-skin-counterBtn pl-2 transition_forAll">
            {statusAll.all}
          </span>
        </div>
        <div className="px-20 text-center lg:px-[100px] md:px-0">
          completed:
          <span className="text-skin-counterBtn pl-2 transition_forAll">
            {statusCompleted.completed}
          </span>
        </div>
        <div className="px-20 text-center lg:px-10 md:px-0">
          remaining:
          <span className="text-skin-counterBtn pl-2 transition_forAll">
            {statusDeleted.deleted}
          </span>
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:w-96 md:mx-auto sm:w-full">
        {tabsInfo.map(tab => (
          <TabsContent key={tab.id} tab={tab} />
        ))}
      </div>
    </div>
  );
});

export default Tabs;
