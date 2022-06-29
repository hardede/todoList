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
    <div className="mt-20 w-[740px] m-auto">
      <div className="flex mb-2 text-lg text-red-500">
        <div className="px-[100px] text-center">
          all:
          <span className="text-[#300089]">{statusAll.all}</span>
        </div>
        <div className="px-20 text-center">
          completed:
          <span className="text-[#300089]">{statusCompleted.completed}</span>
        </div>
        <div className="px-20 text-center">
          remaining:
          <span className="text-[#300089]">{statusDeleted.deleted}</span>
        </div>
      </div>
      <div className="flex justify-between">
        {tabsInfo.map(tab => (
          <TabsContent key={tab.id} tab={tab} />
        ))}
      </div>
    </div>
  );
});

export default Tabs;
