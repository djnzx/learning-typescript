const f_1 = (): number => 42;
const f2 = (): number => { throw new Error("error") };
const f3 = (): Promise<number> => Promise.resolve(-1);
const f4 = (): Promise<number> => Promise.reject(-2);

try {
    f_1();
    f2();
    const x = f3();
    f4().then().catch(() => console.log("smth went wrong in promise"));
} catch (e) {
    console.log("smth went wrong")
}
