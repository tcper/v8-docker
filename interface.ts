/**
 * @author 知心哥哥
 * @since 2020-3-31
 */

declare global {
  interface Window {
    __POWERED_BY_DOOM_TEAM__?: boolean;
  }
}

export interface IDockerImage {

}


export interface IDocker {
  /** Docker的名字 */
  name: string;
  /** Docker导出的代理实体 */
  proxy: WindowProxy;
  /** Docker是否在运行中 */
  dockerRunning: boolean;
  /** Docker检查 */
  docker_check(): void;
  /** Docker拉取image */
  docker_pull(): void;
  /** Docker删除 */
  docker_rm(): void;
  /** 获取Docker正在使用的镜像 */
  docker_images(): IDockerImage[];
  /** Docker ps */
  docker_ps(): string[];
  /** 运行Docker */
  docker_run(): void;
  /** Docker执行命令 */
  docker_exec(): string;
  /** Docker log */
  docker_logs(): string;
  
  docker_commit(): void;

}
