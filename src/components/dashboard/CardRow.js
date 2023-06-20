import React from "react";
import Card from "./Card";
import { ReactComponent as TotalLikes } from "../../assets/total_likes.svg";
import { ReactComponent as TotalTransactions } from "../../assets/total_transactions.svg";
import { ReactComponent as TotalUsers } from "../../assets/total_users.svg";
import { ReactComponent as TotalRevenue } from "../../assets/total_revenue.svg";

const CardRow = () => {
    return (
        <div className="flex justify-between mb-[20px] lg:mb-[40px] gap-x-9">
            <Card
                name={"Total Revenues"}
                quantity={"$2,129,430"}
                icon={<TotalRevenue className="h-[14px] md:h-[18px] lg:h-[24px]" />}
                bg={"#DDEFE0"}
            />
            <Card
                name={"Total Transactions"}
                quantity={"1,520"}
                icon={<TotalTransactions className="h-[14px] md:h-[18px] lg:h-[24px]" />}
                bg={"#F4ECDD"}
            />
            <Card
                name={"Total Likes"}
                quantity={"9,721"}
                icon={<TotalLikes className="h-[14px] md:h-[18px] lg:h-[24px]" />}
                bg={"#EFDADA"}
            />
            <Card
                name={"Total Users"}
                quantity={"892"}
                icon={<TotalUsers className="h-[14px] md:h-[18px] lg:h-[24px]" />}
                bg={"#DEE0EF"}
            />
        </div>
    )
}

export default CardRow;