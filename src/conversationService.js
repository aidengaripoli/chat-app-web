import http from './http'

class ConversationService {
  all () {
    return http.get('/conversations')
  }

  create (participants) {
    return http.post('/conversations', participants)
  }
}

export default new ConversationService()
