const { listen, send } = require("./bot/ws");
const dog = require("./service/dog");

listen(async (data) => {
  console.log(data);

  if (data.message_type === "group" && data.message === "舔狗日记") {
    send("send_group_msg", {
      group_id: data.group_id,
      message: [
        {
          type: "text",
          data: {
            text: await dog.get(),
          },
        },
      ],
    });
  }
});
