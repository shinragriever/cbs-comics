import { Database } from '@vuex-orm/core'
import Comic from '../models/Comic'
import Author from '../models/Author'
import Publisher from '../models/Publisher'
import Serie from '../models/Serie'

const database = new Database()

database.register(Comic, {})
database.register(Author, {})
database.register(Publisher, {})
database.register(Serie, {})

  
export default database


