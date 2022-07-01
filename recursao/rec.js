function recursiva(max) {
    if (max>10) return;
    console.log(max);
    recursiva(max+1)
}
recursiva(0)