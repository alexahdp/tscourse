
type User = {
  name: string;
}
const user = JSON.parse('{ "name": "alex" }') as User;