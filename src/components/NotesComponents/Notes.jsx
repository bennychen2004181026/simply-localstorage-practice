import CreateNote from './CreateNote'
import Note from './Note'

function Notes() {
  return (
    <div className='notes'>
        <Note/>
        <CreateNote/>
    </div>
  )
}

export default Notes