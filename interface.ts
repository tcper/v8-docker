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
  /** 沙箱的名字 */
  name: string;
  /** 沙箱导出的代理实体 */
  proxy: WindowProxy;
  /** 沙箱是否在运行中 */
  dockerRunning: boolean;
  
  docker_check(): void;

  docker_pull(): void;

  docker_rm(): void;

  docker_images(): IDockerImage[];

  docker_ps(): string[];

  docker_run(): void;

  docker_exec(): string;

  docker_logs(): string;

  docker_commit(): void;

}
