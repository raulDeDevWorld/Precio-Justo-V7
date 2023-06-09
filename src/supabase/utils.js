import { supabase } from './config'

const onAuth = (setUserProfile, setUserData) => {
    supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session)
        setUserProfile(session)
      })
}

const signUpWithEmailAndPassword = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    })
}

const signInWithEmailAndPassword = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
}

const signOut = async (email, password) => {
    const { error } = await supabase.auth.signOut()

}



const writeUserData = async (rute, object) => {
    const result = await supabase
    .from(rute)
    .insert(object)


    console.log(result)
}

export { onAuth, signUpWithEmailAndPassword, signInWithEmailAndPassword, signOut, writeUserData}

