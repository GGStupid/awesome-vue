import httpClient from "@/utils/httpClient";

export async function serviceUploadFile(params: unknown) {
  console.log(params);
  return await httpClient.upload("/upload/file", params);
}
