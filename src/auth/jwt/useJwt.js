// ** Core JWT Import
import JwtService from './jwtService'
import jwtConfig from './config'

const jwt = new JwtService(jwtConfig)

export default jwt
