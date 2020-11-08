import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions } from '@microsoft/sp-http';
import { WebPartContext } from '@microsoft/sp-webpart-base';

/********** 画面から呼び出し用関数 **********/
/********** TodoList GET **********/
const getTodoListOptions = "?$select=ID,Title,LimitDate,Note,Modified,Status&$filter=Status eq 'Run'&$orderby=LimitDate asc";

export const GetTodoListItems =
	async (setState: any, targetListName: string, context: WebPartContext) => {
		setState({ loading: true });
		const todoListItems: Array<Object> = await GetListItems(context, targetListName, getTodoListOptions);
		setState({ loading: false, todoListItems });
	};

/********** TodoDetail GET **********/

/********** TodoDetail POST **********/


/********** リストアイテムの操作用共通関数 **********/
const defHeaders: HeadersInit = { "Content-type": "application/json", "Accept": "application/json" };

/********** 検索 **********/
const GetListItems =
	async (context: WebPartContext, listName: string, options: string) => {

		if (!options) {
			options = "";
		}
		const restUri: string = `${context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('${listName}')/Items${options}`;
		const res: SPHttpClientResponse = await SpRestGet(context, restUri);
		const resJson: any = await res.json();
		const resJsonArray: Array<Object> = resJson.value;
		return resJsonArray;
	};

/********** 作成 **********/

/********** 更新 **********/

/********** 削除 **********/


/********** Spへのアクセス用共通関数 **********/
/********** GET Request **********/
const SpRestGet =
	async (context: WebPartContext, RestUri: string) : Promise<SPHttpClientResponse>  => {

		const res: SPHttpClientResponse = await context.spHttpClient.get(RestUri, SPHttpClient.configurations.v1);
		//エラーチェックは他のサイトが詳しいので省きます
		return res;
  };

/********** POST Request **********/