import http from './http'

class ConversationService {
  all () {
    return http.get('/conversations')
  }
}

export default new ConversationService()
