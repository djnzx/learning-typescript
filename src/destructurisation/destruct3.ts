const conf_auth = (token: string) => ( {headers: { Authorization: token }} );

const conf_parm = (token: string, params_: object) => ( { params: params_, ...conf_auth(token) })

const p = conf_parm('token777', {x: 5});

console.log(JSON.stringify(p, undefined, 2));
