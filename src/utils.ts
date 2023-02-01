export function parseFormDataIntoObject<T>(formData: FormData): T {
  const data: Record<string, any> = {}
  for (const key of formData.keys()) data[key] = formData.get(key) 
  return data as T
}

export function delay(ms = 3000, data: any = true) {
  return new Promise(resolve => setTimeout(() => resolve(data), ms))
}