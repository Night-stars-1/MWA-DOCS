/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-17 20:35:56
 * @LastEditTime: 2024-07-17 21:07:08
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 */
import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
