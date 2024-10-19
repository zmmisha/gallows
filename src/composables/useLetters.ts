import {computed, type Ref, ref} from "vue";


export const useLetters = (word: Ref<string>) => {
    const letters = ref<string[]>([])
    const correctLetters = computed(() => letters.value.filter(x => word.value.toLowerCase().includes(x)))
    const wrongLetters = computed(() => letters.value.filter(x => !word.value.toLowerCase().includes(x)))
    const isLose = computed(() => wrongLetters.value.length === 6)
    const isWin = computed(() => [...word.value].every(x => correctLetters.value.includes(x.toLowerCase())))
    const addLetter = (key: string) => {
        if (/[а-яА-ЯёЁ]/.test(key) && !letters.value.includes(key.toLowerCase())) {
            letters.value.push(key.toLowerCase())
        }
    }
    const resetLetters = () => {
        letters.value = []
    }

    return {
        letters,
        wrongLetters,
        correctLetters,
        isLose,
        isWin,
        addLetter,
        resetLetters
    }
}