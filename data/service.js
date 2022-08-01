//Links
// https://docs.microsoft.com/en-us/azure/cosmos-db/table/how-to-use-nodejs#query-a-set-of-entities
// https://docs.microsoft.com/en-us/rest/api/storageservices/Querying-Tables-and-Entities?redirectedfrom=MSDN
// https://docs.microsoft.com/en-us/dynamics-nav/using-filter-expressions-in-odata-uris
// https://docs.microsoft.com/en-us/javascript/api/@azure/data-tables/tablequeryoptions?view=azure-node-latest#filter
// https://docs.microsoft.com/en-us/azure/cosmos-db/table/how-to-use-nodejs#next-steps
// https://www.odata.org/getting-started/basic-tutorial/#search

const azure = require("azure-storage");
const tableService = azure.createTableService(process.env.STORAGE_ACCOUNT, process.env.STORAGE_KEY);
const azureTS = require("azure-table-storage-async");

//Helper function to organise the results back from Azure Table Storage
const filterResults = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    let newObj = {};
    for (const prop in el) {
      newObj[prop] = el[prop]["_"];
    }
    delete newObj[".metadata"];
    newArray.push(newObj);
  }
  return newArray;
};

const buildQuery = async (body) => {
  console.log(body);
  if (!body || !body.surname) {
    return false;
  }
  try {
    const surname = body.surname.toString().toUpperCase();
    let query;
    if (body.firstName.length == 0 && parseInt(body.year) > 0) {
      query = new azure.TableQuery()
        .where("PartitionKey eq ?", surname)
        .and("Year eq ?", parseInt(body.year));
    } else if (body.firstName.length > 0 && isNaN(parseInt(body.year))) {
      console.log("Surname & First Name");
      query = new azure.TableQuery()
        .where("PartitionKey eq ?", surname)
        .and("FirstName eq ?", body.firstName.toString());
    } else if (body.firstName.length > 0 && parseInt(body.year) > 0) {
      query = new azure.TableQuery()
        .where("PartitionKey eq ?", surname)
        .and("FirstName eq ?", body.firstName.toString())
        .and("Year eq ?", parseInt(body.year));
    } else {
      query = new azure.TableQuery().where("PartitionKey eq ?", surname);
    }

    return query;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  azure,
  tableService,
  azureTS,
  filterResults,
  buildQuery,
};
