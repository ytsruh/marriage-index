const { azure, tableService, azureTS, filterResults, buildQuery } = require("../../data/service");

// module.exports = async function (context, req) {
//   try {
//     const query = await buildQuery(req.body);
//     if (!query) {
//       console.log("Error with building the query");
//       throw new Error();
//     }
//     const data = await azureTS.queryCustomAsync(tableService, "marriages", query);
//     console.log(data.length);
//     context.res = {
//       status: 200 /* Defaults to 200 */,
//       body: {
//         count: data.length,
//         results: filterResults(data),
//       },
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//   } catch (err) {
//     console.log(err);
//     context.res.status(500).json({ err });
//   }
// };

export default async function handler(req, res) {
  if (req.method === "POST") {
    await controller.post(req, res);
  } else {
    res.status(404);
  }
}

const controller = {
  post: async (req, res) => {
    try {
      const query = await buildQuery(req.body);
      if (!query) {
        console.log("Error with building the query");
        throw new Error();
      }
      const data = await azureTS.queryCustomAsync(tableService, "marriages", query);
      console.log(data.length);
      res.status(200).json({
        count: data.length,
        results: filterResults(data),
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "An error has occured", err: err });
    }
  },
};
