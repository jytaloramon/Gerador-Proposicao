export default function () {
    const key = Math.floor(Math.random() * 4);
    return conectores[key];
}

const conectores = {
    0: " ^ ",
    1: " v ",
    2: " -> ",
    3: " <=> "
}